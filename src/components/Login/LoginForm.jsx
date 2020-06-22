import React from "react";

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder="Login" />
      </div>
      <div>
        <input placeholder="Password" />
      </div>
      <div>
        <label>
          <input type="checkbox" />
          remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
