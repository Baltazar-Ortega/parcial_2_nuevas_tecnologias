"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // Traer base de datos
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            const games = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            // Devolverlo al cliente
            res.status(404).json({ text: "The game doesn´t exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); // angular envia los datos a traves de este req.body. Puedes ver los datos en la consola. 
            yield database_1.default.query('INSERT INTO games SET ?', [req.body]);
            //  Cuando termine lo de arriba, continua 
            res.json({ message: 'Game saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The game was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // deestructuracion
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'The game was deleted' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
