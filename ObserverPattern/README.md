The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

When we no longer wish for a particular observer to be notified of changes by the subject they are registered with,
the subject can remove them from the list of observers.

"One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."

We can now expand on what we've learned to implement the Observer pattern with the following components:

1. Subject: maintains a list of observers, facilitates adding or removing observers
2. Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
3. ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
4. ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's