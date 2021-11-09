import React, {Dispatch, FC, FormEvent, SetStateAction} from "react";

type onInputFunction = (arg:string) => void;
const InputComponent : FC<{id:string, placeholder:string, setOutside: Dispatch<SetStateAction<string>>, runOnInput:onInputFunction}> = ({id, placeholder, setOutside, runOnInput}) => {

  if(!placeholder) placeholder = "";
  if(!id) id = "";

  const onInput: React.FormEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
    let trimmed = event.currentTarget.value.trim() as string;
    setOutside(trimmed);
    runOnInput(trimmed);
    console.log(trimmed);
  }

  return(
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}

export default InputComponent;
