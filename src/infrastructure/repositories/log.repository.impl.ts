import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import {LogRepository} from "../../domain/repository/log.repository";
import {LogDatasource} from "../../domain/datasources/log.datasource";

export class LogRepositoryImpl implements LogRepository {

    constructor(
        private readonly logDatasource:LogDatasource,
    ) {}

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}