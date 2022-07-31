import { useState } from "react";
import ListContainers from "./components/ListContainers";
import Modal from "./components/Modal";
import DeployContainer from "./components/DeployContainer";

function App() {
    const [deployContainerVisible, setDeployContainerVisible] = useState(false);

    return (
        <div className="App">
            <div>
                {deployContainerVisible && (
                    <Modal setModalVisibility={setDeployContainerVisible}>
                        <DeployContainer
                            setModalVisibility={setDeployContainerVisible}
                        />
                    </Modal>
                )}
                <ListContainers
                    isModalVisible={deployContainerVisible}
                    setModalVisibility={setDeployContainerVisible}
                />
            </div>
        </div>
    );
}

export default App;
