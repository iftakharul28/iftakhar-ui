"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Modal = ({ show, onClose, onConfirm, options }) => {
    const { content, okText = 'OK', cancelText = 'Cancel', message } = options; // Updated this line
    if (!show)
        return null;
    const handleConfirm = () => {
        onClose();
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
    };
    return (react_1.default.createElement("div", { className: 'modal-overlay' },
        react_1.default.createElement("div", { className: 'modal' },
            react_1.default.createElement("div", { className: 'modal-content' },
                content && react_1.default.createElement("p", null, content),
                message && react_1.default.createElement("p", null, message)),
            react_1.default.createElement("div", { className: 'modal-actions' },
                content && react_1.default.createElement("button", { onClick: onClose }, cancelText),
                react_1.default.createElement("button", { onClick: handleConfirm }, okText)))));
};
exports.Modal = Modal;
const AlertConfirm = () => {
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const [modalOptions, setModalOptions] = (0, react_1.useState)(null);
    const [confirmResult, setConfirmResult] = (0, react_1.useState)(false);
    const openModal = (options) => {
        setModalOptions(options);
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
        setModalOptions(null);
    };
    const confirm = (options) => __awaiter(void 0, void 0, void 0, function* () {
        openModal(options);
        return new Promise((resolve) => {
            setConfirmResult(false);
            const handleClose = () => {
                closeModal();
                resolve(confirmResult);
            };
            const handleConfirm = () => {
                closeModal();
                setConfirmResult(true);
                resolve(true);
            };
            // const handleCancel = () => {
            //   closeModal();
            //   resolve(false);
            // };
            // eslint-disable-next-line react/no-deprecated
            react_dom_1.default.render(react_1.default.createElement(exports.Modal, { show: modalVisible, onClose: handleClose, onConfirm: handleConfirm, options: modalOptions }), document.getElementById('modal-root'));
        });
    });
    const alert = (options) => {
        openModal(options);
    };
    return { confirm, alert };
};
exports.default = AlertConfirm;
