"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
const Success = (props) => {
    //   const [showToast, setShowToast] = useState(false);
    //   useEffect(() => {
    //     if (props.msg) {
    //       setShowToast(true);
    //       // Automatically hide the toast after a certain time
    //       const timer = setTimeout(() => {
    //         setShowToast(false);
    //       }, 5000);
    //       return () => clearTimeout(timer);
    //     }
    //   }, [props.msg]);
    //   return showToast ? (
    //     <div className='toast-container' style={{ left: 0 }}>
    //       <div className='toast-content'>
    //         <div className='toast-title'>{props.msg}</div>
    //         {props.description ? <div className='toast-description'>{props.description}</div> : null}
    //         <Button className='toast-button' type='button'>
    //           Undo
    //         </Button>
    //       </div>
    //     </div>
    //   ) : null;
    return react_1.default.createElement("div", null, props.msg);
};
exports.Success = Success;
const Error = (props) => {
    react_1.default.createElement("div", { className: 'toast-container', style: { left: 0 } },
        react_1.default.createElement("div", { className: 'toast-content' },
            react_1.default.createElement("div", { className: 'toast-title' }, props.msg),
            props.description ? react_1.default.createElement("div", { className: 'toast-description' }, props.description) : null,
            react_1.default.createElement(Button_1.default, { className: 'toast-button', type: 'button' }, "Undo")));
};
exports.Error = Error;
const Toast = {
    success: exports.Success,
    error: exports.Error,
};
exports.default = Toast;
