import {describe, expect, it} from 'vitest';
import {createChatItemDom} from '@shared/components/ChatItem/create';
import {ChatItemProps} from '@shared/components/ChatItem/props';
import {updateChatItemDom} from '@shared/components/ChatItem/update';

describe('When a chat item component is complete in received direction', () => {
    describe('When the message is updated', () => {
        it('Should update the message', () => {
            // Arrange
            const props: ChatItemProps = {
                name: 'John Doe',
                direction: 'received',
                layout: 'bubbles',
                status: 'complete',
                message: 'Hello, World!',
            };
            const chatItem = createChatItemDom(props);
            const message = chatItem.querySelector('.nlux-comp-message') as HTMLElement;

            // Act
            updateChatItemDom(chatItem, props, {
                ...props,
                message: 'Hello, Universe!',
            });

            // Assert
            expect(message.textContent).toBe('Hello, Universe!');
        });
    });

    describe('When the display mode is updated', () => {
        it('Should update the display mode', () => {
            // Arrange
            const props: ChatItemProps = {
                name: 'John Doe',
                direction: 'received',
                layout: 'bubbles',
                status: 'complete',
                message: 'Hello, World!',
            };
            const chatItem = createChatItemDom(props);

            // Act
            updateChatItemDom(chatItem, props, {
                ...props,
                layout: 'list',
            });

            // Assert
            expect(chatItem.classList.contains('nlux-comp-chatItem--listLayout')).toBe(true);
        });
    });

    describe('When the status is updated', () => {
        it('Should update the message status', () => {
            // Arrange
            const props: ChatItemProps = {
                name: 'John Doe',
                direction: 'received',
                layout: 'bubbles',
                status: 'complete',
                message: 'Hello, World!',
            };
            const chatItem = createChatItemDom(props);
            const message = chatItem.querySelector('.nlux-comp-message') as HTMLElement;

            // Act
            updateChatItemDom(chatItem, props, {
                ...props,
                status: 'streaming',
            });

            // Assert
            expect(message.classList.contains('nlux_msg_streaming')).toBe(true);
        });
    });
});
