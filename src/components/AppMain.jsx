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
            <main>
                <div className="container flex-center">
                    <form onSubmit={submitNewForm} action="">
                        <input
                            name="author"
                            id="name"
                            type="text"
                            className="form-control"
                            value={formInfo.name}
                            onChange={updateFormInfo}
                        />

                    </form>
                </div>
            </main>
        </>
    )
}

export default AppMain;