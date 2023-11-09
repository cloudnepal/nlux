import {createNluxConvo, NluxConvo} from '@nlux/nlux';
import {createAdapter} from '@nlux/openai';

debugger;
const apiKey = localStorage.getItem('apiKey') || 'YOUR_API_KEY_HERE';

let nluxConvo: NluxConvo | null = null;
let rootElement: HTMLElement | null = null;

(window as any).demo = {
    mount: () => rootElement && nluxConvo?.mount(rootElement),
    unmount: () => nluxConvo?.unmount(),
    show: () => nluxConvo?.show(),
    hide: () => nluxConvo?.hide(),
};

document.addEventListener('DOMContentLoaded', () => {
    rootElement = document.getElementById('nluxc-root');
    if (!rootElement) {
        throw new Error('Root element not found');
    }

    const adapter = createAdapter('openai/gpt')
        .withApiKey(apiKey)
        // .withModel('gpt-4')
        // .useStreamingMode()
        .useFetchingMode()
        // .useStreamingMode()
        .withInitialSystemMessage(
            'Act as a Nobel Prize in Physics winner who is ' +
            'helping a PHD student in their research',
        );

    nluxConvo = createNluxConvo()
        .withAdapter(adapter)
        .withLayoutOptions({
            maxWidth: 500,
            maxHeight: 500,
        })
        .withPromptBoxOptions({
            placeholder: 'Ask me anything about nuclear physics!',
            autoFocus: true,
        });

    nluxConvo.mount(rootElement);
});
