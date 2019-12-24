// Instead of building complex input-output chains, it is possible to
// communicate between components using serives.
// Suppose we want to log something into component B everytimes something
// in component A happens
// Code:
// In Service File:
statusUpdated = new EventEmitter<string>();
// Component A:
this.accountService.statusUpdated.emit(status);
// Component B:
this.accountsService.statusUpdated.subscribe(
    (status: string) => alert('New Status ' + status)
);