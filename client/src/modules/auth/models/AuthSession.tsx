import {baseApi} from "../../../shared/api/baseApi.ts";
import {useTokenStore} from "../../../app/store/TokenStore.ts";
import {type PropsWithChildren, useEffect} from "react";

let restoreSessionPromise: Promise<void> | null = null;

const restoreSession = (): Promise<void> => {
  if (!restoreSessionPromise) {
    restoreSessionPromise = baseApi.
       post('/auth/refresh')
      .then(({data}) => useTokenStore.getState().setToken(data.token))
      .catch(() => useTokenStore.getState().clearToken())
      .finally(() => useTokenStore.getState().setSessionInitialized());
  }

  return restoreSessionPromise;
}

export const AuthSession = ({children}: PropsWithChildren) => {
  const isSessionInitialized = useTokenStore((state) => state.isSessionInitialized);

  useEffect(() => {
    restoreSession();
  }, []);

  if (!isSessionInitialized) {
    return null;
  }

  return children;
}