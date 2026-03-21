interface WelcomeEmailTemplateProps {
  firstName: string
}

const welcome = ({ firstName }: WelcomeEmailTemplateProps) => {
  return (
    <div>welcome, {firstName}</div>
  );
};

export default welcome;
