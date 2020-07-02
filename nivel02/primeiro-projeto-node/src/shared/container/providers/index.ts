import { container } from 'tsyringe';
import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
// import IMailProvider from './MailProvider/models/IMailProvider';

// container.registerSingleton<IMailProvider>('MailProvider', DiskStorageProvider);

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
