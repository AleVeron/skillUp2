import Header from "../../Header/Header"
import './task.css'

export default function Task ( ){
    return(
        <>
        <Header/>
        <main id="tasks">
            <section className="wrapper_list col-10">
                <div className="list_header">
                <h2 >My tasks</h2>
                </div>
                <div className="list">


                    <div className="card">
                        <div className="close">X</div>
                        <h3>Task 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Alejo Veron</h5>
                        <div >
                        <button type="button" className="btn btn-warning me-1">New</button>
                        <button type="button" className="btn btn-danger me-1">High</button>
                        </div>

                        <p>Description :</p>
                    </div>

                    <div className="card">
                        <div className="close">X</div>
                        <h3>Task 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Alejo Veron</h5>
                        <div >
                        <button type="button" className="btn btn-warning me-1">New</button>
                        <button type="button" className="btn btn-danger me-1">High</button>
                        </div>
                        <p>Description :</p>
                    </div>

                    <div className="card">
                        <div className="close">X</div>
                        <h3>Task 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Alejo Veron</h5>
                        <div >
                        <button type="button" className="btn btn-warning me-1">New</button>
                        <button type="button" className="btn btn-danger me-1">High</button>
                        </div>
                        <p>Description :</p>
                    </div>

                    <div className="card">
                        <div className="close">X</div>
                        <h3>Task 1</h3>
                        <h6>24/1/2022</h6>
                        <h5>Alejo Veron</h5>
                        <div >
                        <button type="button" className="btn btn-warning me-1">New</button>
                        <button type="button" className="btn btn-danger me-1">High</button>
                        </div>
                        <p>Description: lorem*20</p>
                    </div>


                </div>
            </section>
        </main>
        </>
    )
}