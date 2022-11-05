import UserForm from '../../Components/UserForm/UserForm';
const CreateUser = () => {
  const handleSubmit = async newUser => {
    const result = await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (result.ok) {
      alert(" Account Created");
    } else {
      const message = await result.text();
      alert(message);
    }
  };


  const defaultFormState = {username:"", email:"",password:"",confirmPassword:""};

  return (
    <section className="create-user">
      <UserForm handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Make your Account!" />
    </section>
  );
};

export default CreateUser;