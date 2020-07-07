import $item from './items.service';

import { failToCreateWarning } from '../constants';

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
    return value
      .replace(/\D/, '')
      .replace(/(\d{7})(\d)/, '$1')
      .replace(/(\d{6})(\d)/, '$1-$2');
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
  navigate: (path: string) => void,
  payload: Payload,
) {
  return async () => {
    console.log('submit');
    loaderSetter(true);
    try {
      const doc = transform(payload);
      await $item.create(doc);
      loaderSetter(false);
      navigate('List');
    } catch (_) {
      loaderSetter(false);
      warningSetter(failToCreateWarning);
    }
  };
}

export default { inputHandler, submitHandler };
