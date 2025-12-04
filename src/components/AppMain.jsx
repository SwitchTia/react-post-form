import { useState } from "react";



function AppMain() {
    const [formInfo, setFormInfo] = useState(initialFormInfo)


    function updateFormInfo(event) {
        const key = event.target.name;
        const inputType = event.target.type;
        const newObject = {
            ...formInfo,
            [key]: event.target.value,
        };
        setFormInfo(newObject);
    }

    return (
        <>
            <main>
                <div className="container flex-center">
                    <form action="">
                        <input
                            name="author"
                            id="name"
                            type="text"
                            className="form-control"
                            value={formInfo.name}
                        />

                    </form>
                </div>
            </main>
        </>
    )
}

export default AppMain;