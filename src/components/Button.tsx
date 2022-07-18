import { Button as NativeButton, IButtonProps, Heading } from "native-base";

export interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded={"sm"}
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Heading color="white" fontSize={"sm"}>
        {title}
      </Heading>
    </NativeButton>
  );
}
