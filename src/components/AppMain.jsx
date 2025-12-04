import { useState } from "react";




const initialFormInfo = {
    author: "",
    title: "",
    body: "",
    public: "true",

};


function AppMain() {
    const [formInfo, setFormInfo] = useState(initialFormInfo);
    const [newPost, setNewPost] = useState()




    function updateFormInfo(event) {
        const key = event.target.name;
        const inputType = event.target.type;
        const newObject = {
            ...formInfo,
            [key]: event.target.value,
        };
        setFormInfo(newObject);
    }



    function submitNewForm(event) {
        event.preventDefault();

        setTickets((current) => [...current, formData]);
        setFormData(initialFormData);
    }

    return (
        <>
            <main className="py-40">
                <div className="container flex-center py-40 text-center">
                    <form onSubmit={submitNewForm} action="" >

                        <div className="mb-30">
                            <label htmlFor="author">Author: </label>
                            <input
                                name="author"
                                id="author"
                                type="text"
                                className="form-control"
                                value={formInfo.name}
                                onChange={updateFormInfo}
                            />
                        </div>

                        <div className="mb-30">
                            <label htmlFor="title">Title: </label>
                            <input
                                name="title"
                                id="title"
                                type="text"
                                className="form-control"
                                value={formInfo.name}
                                onChange={updateFormInfo}
                            />
                        </div>

                        <div className="mb-30">
                            <label htmlFor="body">Write your post here: </label>
                            <div>
                                <textarea
                                name="body"
                                id="body"
                                value={formInfo.body}
                                onChange={formInfo.body}
                            ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn text-center">
                            Submit new post
                        </button>

                    </form>
                </div>
            </main>
        </>
    )
}

export default AppMain;