import IFindAllInnDayFromProviderDTO from 'modules/users/dtos/IFindAllInDayFromProviderDTO';
import IFindAllInnMonthFromProviderDTO from 'modules/users/dtos/IFindInAllInMonthFromProviderDTO';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInnMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInnDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
