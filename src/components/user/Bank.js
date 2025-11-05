import React from 'react'
import { Link } from 'react-router-dom'

const Bank = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h2 className='mt-3'> Bank Questions Series</h2>
                        <p>Banks play a vital role in supporting government economic policies and managing public funds.
                            They help implement government schemes, provide loans, and maintain financial stability.</p>
                        <div className="row box border rounded p-2 shadow-sm m-3 align-items-center">
                            <Link className="text-decoration-none text-dark d-flex align-items-center" to="/anatomy/gametogenesis">

                                {/* Image in front of box */}
                                <img
                                    src="https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?cs=srgb&dl=pexels-enginakyurt-2678059.jpg&fm=jpg"  // ✅ Example icon
                                    alt="English"
                                    width="45"
                                    height="45"
                                    className="me-3"
                                />

                                {/* Text content */}
                                <div>
                                    <div className="header">
                                        <h5 className="mb-1">Anatomy</h5>
                                    </div>
                                    <div className="body">
                                        <p className="mb-0">0/100 Modules</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="row box border rounded p-2 shadow-sm m-3 align-items-center">
                            <Link className="text-decoration-none text-dark d-flex align-items-center">

                                {/* Image in front of box */}
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy5Y0fjFB02p6qZmzA2M5W51RnD3haMvbogMdJHlGEmFNYx2HXRP3i9Y&s"  // ✅ Example icon
                                    alt="English"
                                    width="45"
                                    height="45"
                                    className="me-3"
                                />

                                {/* Text content */}
                                <div>
                                    <div className="header">
                                        <h5 className="mb-1">Biochemistry</h5>
                                    </div>
                                    <div className="body">
                                        <p className="mb-0">0/100 Modules</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="row box border rounded p-2 shadow-sm m-3 align-items-center">
                            <Link className="text-decoration-none text-dark d-flex align-items-center">

                                {/* Image in front of box */}
                                <img
                                    src="https://media.istockphoto.com/id/2166388157/photo/human-circulatory-system-heart-anatomy.jpg?s=612x612&w=0&k=20&c=1B5Sf84bw9vZjd_V1-fERkuajAn2jheIDSKPYay2ba0= "  // ✅ Example icon
                                    alt="English"
                                    width="45"
                                    height="45"
                                    className="me-3"
                                />

                                {/* Text content */}
                                <div>
                                    <div className="header">
                                        <h5 className="mb-1">Physiology</h5>
                                    </div>
                                    <div className="body">
                                        <p className="mb-0">0/100 Modules</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="row box border rounded p-2 shadow-sm m-3 align-items-center">
                            <Link className="text-decoration-none text-dark d-flex align-items-center">

                                {/* Image in front of box */}
                                <img
                                    src="https://carrington.edu/wp-content/uploads/2020/01/pharmacy-pills.jpg"  // ✅ Example icon
                                    alt="English"
                                    width="45"
                                    height="45"
                                    className="me-3"
                                />

                                {/* Text content */}
                                <div>
                                    <div className="header">
                                        <h5 className="mb-1">Pharmacology</h5>
                                    </div>
                                    <div className="body">
                                        <p className="mb-0">0/100 Modules</p>
                                    </div>
                                </div>

                            </Link>
                        </div>

                    </div>

                    {/* <div className="col-md-6 ">
                        <h2 className='mt-3'> Bank Questions Series</h2>
                        <p>Banks play a vital role in supporting government economic policies and managing public funds.
                            They help implement government schemes, provide loans, and maintain financial stability.</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Bank