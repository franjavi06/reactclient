import React from 'react'
import Footer from '../components/Footer'
import LogoutModal from '../components/LogoutModal'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Home = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div id="wrapper">

                <Sidebar/>

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        <Topbar/>

                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <h1 className="h3 mb-4 text-gray-800">Blank Page - Aquí va el contenido</h1>
                        </div>
                        {/* /.container-fluid */}                    

                    </div>
                    {/* End of Main Content */}

                    <Footer/>

                </div>
                {/* End of Content Wrapper */}

            </div>
            {/* End of Page Wrapper */}

            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
            </a>
            {/* End Scroll to Top Button*/}

            <LogoutModal/>

        </div>

    )
}

export default Home
