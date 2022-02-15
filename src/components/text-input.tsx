import React, {Dispatch, FC, FormEvent, SetStateAction} from "react";

type onInputFunction = (arg: string)=> void;
const TextInput: FC<{id: string, placeholder: string, setOutside: Dispatch<SetStateAction<string>>, runOnInput: onInputFunction}> = ({id, placeholder, setOutside, runOnInput}) => {

  if(!placeholder) placeholder = "";
  if(!id) id = "";

  const onInput: React.FormEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
    const trimmed = event.currentTarget.value.trim() as string;
    setOutside(trimmed);
    runOnInput(trimmed);
  };

  return(
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
};

export default TextInput;
