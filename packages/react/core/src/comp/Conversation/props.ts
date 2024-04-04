import {ConversationOptions, HighlighterExtension, ParticipantRole} from '@nlux/core';
import {ReactNode} from 'react';
import {PersonaOptions} from '../../exp/personaOptions';

export type ConversationAiMessage<MessageType> = {
    id: string;
    role: ParticipantRole;
} & (
    {
        message: undefined;
        status: 'loading' | 'streaming' | 'error';
    } | {
        message: MessageType;
        status: 'rendered';
    }
);

export type ConversationUserMessage = {
    id: string;
    role: ParticipantRole;
    message: string;
    status: 'rendered';
}

export type ConversationMessage<MessageType> = ConversationAiMessage<MessageType> | ConversationUserMessage;

export type ConversationCompProps<MessageType> = {
    messages: ConversationMessage<MessageType>[];
    conversationOptions?: ConversationOptions;
    personaOptions?: PersonaOptions;
    customAiMessageComponent?: (message: MessageType) => ReactNode;
    syntaxHighlighter?: HighlighterExtension;
};

export type ImperativeConversationCompProps = {
    scrollToBottom: () => void;
    streamChunk: (messageId: string, chunk: string) => void;
};