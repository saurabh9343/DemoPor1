import React, { useState } from 'react';
import { db, auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // ✅ Firebase Auth
            const adminData = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            const admin = adminData.user;

            // ✅ Check admin in Firestore
            const adminDoc = await getDoc(doc(db, "admin", admin.uid));
            localStorage.setItem("adminData", JSON.stringify(adminDoc));
            if (adminDoc.exists()) {
                alert("Admin login successful!");
                navigate("/admin/dashboard");
            } else {
                alert("You are not an admin!");
            }

        } catch (error) {
            alert(error.message); // ✅ fixed spelling
            console.log(error.message);
        }
    }   

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded shadow">
                    <div className="text-center bg-info p-2 rounded mb-3">
                        <h3 className="fw-bold">Login Admin</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-info w-100">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
