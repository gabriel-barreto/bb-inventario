import $item from './items.service';

import {
  failToCreateWarning,
  invalidUserRegistry,
  successCreatedWarning,
  userRegistryRegex,
} from '../constants';

type Payload = {
  code: string;
  name: string;
  sector: string;
  userName: string;
  userRegistry: string;
};

type Item = {
  code: string;
  name: string;
  sector: string;
  user: {
    name: string;
    registry: string;
  };
};

function transform(payload: Payload): Item {
  const base = { ...payload };
  delete base.userName;
  delete base.userRegistry;

  return {
    ...base,
    user: { name: payload.userName, registry: payload.userRegistry },
  };
}

const masks: Record<string, (value: string) => string> = {
  userRegistry: (value: string) => {
    if (!value) return value;
    return value.replace(/([ACF]{1})\D/, '$1').replace(/(\d{7})\./, '$1');
  },
};

function inputHandler(
  setter: Dispatch<SetStateAction<Record<string, string>>>,
  key: string,
) {
  return (userInput: string) => {
    let value = userInput;
    if (key in masks) value = masks[key](userInput);

    setter((prev) => ({ ...prev, [key]: value }));
  };
}

function submitHandler(
  loaderSetter: (state: boolean) => void,
  warningSetter: (message: string) => void,
  navigate: (path: string, params: Record<string, string>) => void,
  payload: Payload,
) {
  return async () => {
    loaderSetter(true);
    try {
      const isUserRegistryValid = userRegistryRegex.test(payload.userRegistry);
      if (!isUserRegistryValid) {
        warningSetter(invalidUserRegistry);
        return;
      }

      const doc = transform(payload);
      await $item.create(doc);

      loaderSetter(false);
      navigate('List', { message: successCreatedWarning });
    } catch (_) {
      loaderSetter(false);
      warningSetter(failToCreateWarning);
    }
  };
}

export default { inputHandler, submitHandler };
