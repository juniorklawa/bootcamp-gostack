import { container } from 'tsyringe';
import IAppointmentsRepository from 'modules/appointments/repositories/IAppointementsRepository';
import AppointmentsRepository from 'modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import 'modules/users/providers';
import './providers';

import IUsersRepository from 'modules/users/repositories/IUsersRepository';
import UsersRepository from 'modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
