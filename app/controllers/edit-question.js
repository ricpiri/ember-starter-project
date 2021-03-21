import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    currentSession: service(),
    actions: {
        exitedRoute() {
            this.get('question').rollbackAttributes();
        },
        onQuestionUpdated(/*question*/) {
            this.transitionToRoute('index');
        }
    }
});
