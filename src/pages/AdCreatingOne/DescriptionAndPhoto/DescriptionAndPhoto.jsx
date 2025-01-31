import React from "react";
import cl from "./DescriptionAndPhoto.module.css";
import GreyText from "../../../components/UI/GreyText/GreyText";
import CreateInput from "../../../components/UI/CreateInput/CreateInput";
import FileInput from "../../../components/UI/FileInput/FileInput";
import TextArea from "../../../components/UI/TextArea/TextArea";
import MakePrivate from "../MakePrivate/MakePrivate";
const DescriptionAndPhoto = ({
  className,
  taskInformation,
  setTaskInformation,
  MyInformation,
}) => {
  return (
    <div
      className={
        className
          ? [cl.DescriptionAndPhoto, className].join(" ")
          : cl.DescriptionAndPhoto
      }
    >
      <GreyText className={cl.GreyText}>Описание</GreyText>
      <div className={cl.InputContainer}>
        <p className={cl.inputCounter} style={ taskInformation.taskDescription.length < 500 ? {} : {color : '#8a0303'}}>{taskInformation.taskDescription.length} / 500</p>
        <TextArea 
          value={taskInformation.taskDescription}
          className={cl.DescriptionInput}
          placeholder="Дайте подробное тз..."
          setValue = {   (e) =>   { setTaskInformation( { ...taskInformation ,taskDescription : e} ) } } 
        ></TextArea>
      </div>
      {MyInformation ? <MakePrivate className={cl.anotherPrivate} taskInformation={taskInformation} setTaskInformation={setTaskInformation} isPrivate={taskInformation.isPrivate} text = 'Добавить приватную информацию' enabledText='Её увидит только пользователь' notEnabledText='то же самое'   /> : ''}
      <FileInput className={cl.FileInput} />
    </div>
  );
};

export default DescriptionAndPhoto;
