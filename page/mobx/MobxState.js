/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { action, observable, useStrict } from "mobx";
import { observable } from 'mobx'

class MobxState {
    @observable timer = 10;

    addTimers() {
        this.timer += 1
    }
    resetTimer() {
        this.timer = 0;
    }
}
export default new MobxState()