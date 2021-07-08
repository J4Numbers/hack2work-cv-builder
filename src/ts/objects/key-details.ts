import { CompletionStatus } from './completion-status';
import { QuestionArea } from './question-area';

export interface KeyDetail {
  id: string,
  questionArea: QuestionArea,
  completionStatus: CompletionStatus,
}

export type KeyDetails = Array<KeyDetail>;
