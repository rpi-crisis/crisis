import React, {Dispatch, FC, FormEvent, SetStateAction} from "react";

const InputComponent : FC<{id?:string, placeholder?:string, setOutside: Dispatch<SetStateAction<string>>}> = ({id, placeholder, setOutside}) => {

  if(placeholder === undefined){
    placeholder = "";
  }

  if(id === undefined){
    id = "";
  }

  const onInput: React.FormEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
    setOutside(event.currentTarget.value as string);

    console.log(event.currentTarget.value as string);
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
