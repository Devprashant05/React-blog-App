import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/reducers/AuthReducer";
import { Header, Footer } from "./components/index";
function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData));
                } else {
                    dispatch(logout());
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className="w-full block">
                <Header />
                <main> Todo: {/* Outlet */}</main>
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App;
