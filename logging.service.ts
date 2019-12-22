// No decorators are neede to make a service function properly. 
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status ' + status);
    }
}
// Services can function by creating the instances of objects manually.
// This is not right, its better to use Angular's dependency injector.
// For this, a constructor is needed in the componenet that uses a service
// constructor(private loggingService: LoggingServie) {}\
// For this to work properly, the providers attribute must be added to the component decorator
// @Component({
//     selector: 'app-new-account',
//     templateUrl: ....
//     styleUrls: ....
//      providers: [LoggingService]
// })