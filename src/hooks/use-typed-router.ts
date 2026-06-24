import { useRouter } from 'expo-router';

import type { RootStackPanelList } from '@/types/navigation';

type ParamsOf<K extends keyof RootStackPanelList> = RootStackPanelList[K];

type NavigateArgs<K extends keyof RootStackPanelList> = ParamsOf<K> extends undefined
  ? [screen: K]
  : [screen: K, params: ParamsOf<K>];

function toHref<K extends keyof RootStackPanelList>(...[screen, params]: NavigateArgs<K>) {
  return params ? { pathname: `/${screen}`, params } : `/${screen}`;
}


// déclarées dans RootStackPanelList: une route ou des params invalides ne compilent pas.
export function useTypedRouter() {
  const router = useRouter();

  return {
    ...router,
    push: <K extends keyof RootStackPanelList>(...args: NavigateArgs<K>) =>
      router.push(toHref(...args) as never),
    replace: <K extends keyof RootStackPanelList>(...args: NavigateArgs<K>) =>
      router.replace(toHref(...args) as never),
  };
}
