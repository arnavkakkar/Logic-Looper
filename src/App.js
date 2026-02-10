import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Logged in successfully 🎉");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-900">
      <h1 className="text-4xl font-bold text-white">Logic Looper</h1>

      <button
        onClick={login}
        className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
      >
        Login with Google
      </button>
    </div>
  );
}

export default App;