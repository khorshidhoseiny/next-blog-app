import Button from "./Button";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import SvgLoaderComponent from "./SVGLoaderComponent";

function SubmitButton({ children, classname, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`flex btn items-center justify-center gap-x-4 py-4
        ${classname}
        `}
    >
      {children}
      {pending && <SvgLoaderComponent />}
    </Button>
  );
}
export default SubmitButton;
