import { useFormContext } from 'react-hook-form';

interface TextInputProps {
  label: string;
  fieldName: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, fieldName }) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="pb-[3px]">
        <label htmlFor={fieldName}>{label}</label>
      </div>
      <div>
        <input type="text" {...register(fieldName)} />
      </div>
    </>
  );
};

export default TextInput;
