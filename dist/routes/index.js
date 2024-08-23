"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountController_1 = require("../controllers/accountController");
const router = express_1.default.Router();
router.post('/reset', accountController_1.reset);
router.get('/balance', accountController_1.getBalance);
router.post('/event', accountController_1.handleEvent);
exports.default = router;
