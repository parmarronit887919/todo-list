import {sidebar} from "./sidebar";
import {taskgeneratingProcess} from "./taskGenerator";
import { projectGenerator } from "./project";
import './style.css';

projectGenerator();
sidebar();
taskgeneratingProcess();

