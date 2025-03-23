"use strict";
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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //http request logger middleware for nodejs
const http_1 = __importDefault(require("http"));
const helmet_1 = __importDefault(require("helmet")); // Use Helmet to secure HTTP headers
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./utils/db");
const authRoutes = require("./routes/auth.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "100kb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true //   Access-Control-Allow-Credentials is a header that, when set to true , tells browsers to expose the response to the frontend JavaScript code. The credentials consist of cookies, authorization headers, and TLS client certificates.
}));
app.use((0, helmet_1.default)());
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
const limiter = (0, express_rate_limit_1.default)({
    max: 3000,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP. Please try again in one hour"
});
function checkConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Attempt a simple query to verify connection
            yield db_1.prismaClient.$queryRaw `SELECT 1`;
            console.log('Connected to the database successfully.');
        }
        catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    });
}
checkConnection();
app.use('/convor', limiter);
app.use('/convor/auth', authRoutes);
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Listening on running on PORT ${PORT}`);
});
