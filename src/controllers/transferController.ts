export class TransferController {
    constructor(private transferService: TransferService) {}

    async transferItem(req: Request, res: Response) {
        try {
            const { itemId, fromWarehouseId, toShopId, quantity } = req.body;
            const transfer = await this.transferService.transferItem(itemId, fromWarehouseId, toShopId, quantity);
            res.status(200).json(transfer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTransferHistory(req: Request, res: Response) {
        try {
            const history = await this.transferService.getTransferHistory();
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}