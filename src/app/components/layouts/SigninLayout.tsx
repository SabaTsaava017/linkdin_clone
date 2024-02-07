
const SigninLayout = () => {
  return (
    <div className="Top" style={{ display: "flex" }}>
      <div
        className="mainInp"
        style={{ display: "flex", flexDirection: "column", padding: 110 }}
      >
        <h1 style={{ color: "orange", width: 400 }}>
          WELCOME TO YOUR PTOFFESIONAL COMMUNITY
        </h1>
        <div
          className="input1"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>email or phone</p>
          <input
            type="email"
            placeholder="write email"
            style={{ width: 350, height: 60, borderRadius: 12 }}
          />
        </div>
        <div
          className="input2"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>Password</p>
          <input
            type="password"
            placeholder="write password"
            style={{ width: 350, height: 60, borderRadius: 12 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            paddingTop: 50,
          }}
        >
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              width: 350,
              height: 50,
              borderRadius: 24,
            }}
          >
            SING IN
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "blue",
              width: 350,
              height: 50,
              borderRadius: 24,
            }}
          >
            SING UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninLayout;
