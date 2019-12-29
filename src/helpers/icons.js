import { faTrash, faSignOutAlt, faEdit, faBackspace, faSpinner, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
 return library.add(faTrash, faSignOutAlt, faEdit, faBackspace, faSpinner, faPlusCircle);
};

export default Icons;