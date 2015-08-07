declare namespace wip {
    export interface actions {
        send: {
            (data: WipData): void;
        }
    }

    export interface WipData {
        id: number,
        message: string
    }
}

declare var wipActions: wip.actions;