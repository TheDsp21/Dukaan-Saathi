import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Package, AlertTriangle, Download, QrCode, ScanLine, Plus, X } from "lucide-react";
import { Card, Empty } from "./DashboardPage";

const EMPTY_FORM = {
  name: "",
  unit: "unit",
  stock_qty: "",
  purchase_price: "",
  selling_price: "",
  supplier: "",
  expiry_date: "",
  batch_number: "",
  barcode: "",
  low_stock_threshold: "5",
};

function AddProductModal({ onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic will be added in next step
    alert("Save functionality coming soon!");
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal panel */}
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-shopfront/10">
              <Package className="h-4 w-4 text-shopfront" />
            </div>
            <h2 className="font-semibold text-ink">Add Product</h2>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-ink/40 hover:bg-black/5 hover:text-ink transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-4">

          {/* Product Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
              Product Name <span className="text-terracotta">*</span>
            </label>
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder="e.g. Basmati Rice"
              className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
            />
          </div>

          {/* Unit + Stock Qty */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Unit</label>
              <select
                value={form.unit}
                onChange={set("unit")}
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              >
                <option value="unit">Unit</option>
                <option value="kg">Kg</option>
                <option value="g">Gram</option>
                <option value="litre">Litre</option>
                <option value="ml">ml</option>
                <option value="dozen">Dozen</option>
                <option value="box">Box</option>
                <option value="packet">Packet</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
                Opening Stock <span className="text-terracotta">*</span>
              </label>
              <input
                required
                type="number"
                min="0"
                step="any"
                value={form.stock_qty}
                onChange={set("stock_qty")}
                placeholder="0"
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
          </div>

          {/* Purchase Price + Selling Price */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
                Purchase Price (₹) <span className="text-terracotta">*</span>
              </label>
              <input
                required
                type="number"
                min="0"
                step="any"
                value={form.purchase_price}
                onChange={set("purchase_price")}
                placeholder="0.00"
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
                Selling Price (₹) <span className="text-terracotta">*</span>
              </label>
              <input
                required
                type="number"
                min="0"
                step="any"
                value={form.selling_price}
                onChange={set("selling_price")}
                placeholder="0.00"
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
          </div>

          {/* Supplier */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Supplier</label>
            <input
              value={form.supplier}
              onChange={set("supplier")}
              placeholder="Supplier name (optional)"
              className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
            />
          </div>

          {/* Expiry + Batch */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Expiry Date</label>
              <input
                type="date"
                value={form.expiry_date}
                onChange={set("expiry_date")}
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Batch Number</label>
              <input
                value={form.batch_number}
                onChange={set("batch_number")}
                placeholder="Batch / Lot no."
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
          </div>

          {/* Barcode + Low Stock Threshold */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Barcode</label>
              <input
                value={form.barcode}
                onChange={set("barcode")}
                placeholder="Scan or enter barcode"
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink/60 uppercase tracking-wide">Low Stock Alert</label>
              <input
                type="number"
                min="0"
                step="any"
                value={form.low_stock_threshold}
                onChange={set("low_stock_threshold")}
                placeholder="5"
                className="w-full rounded-xl border border-black/10 bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-shopfront focus:ring-2 focus:ring-shopfront/20 transition"
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-3 border-t border-black/5 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-ink/60 hover:bg-black/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-shopfront px-5 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform shadow"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function InventoryPage() {
  const { data, t } = useOutletContext();
  const [showAddModal, setShowAddModal] = useState(false);

  const exportCsv = () => {
    alert("Full inventory export coming soon!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-shopfront">Inventory</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink/70 ring-1 ring-black/5 hover:bg-paper-deep"
          >
            <Download className="h-4 w-4" /> Export
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-shopfront px-4 py-2 text-xs font-semibold text-white shadow hover:-translate-y-0.5 transition-transform"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>
      </div>

      <Card title={t("dashboard.inventoryStock")} icon={Package}>
        {data?.inventory?.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-ink/40">
                <tr>
                  <th className="py-2">{t("dashboard.item")}</th>
                  <th className="py-2 text-right">{t("dashboard.stock")}</th>
                  <th className="py-2 text-right">Purchase Price</th>
                  <th className="py-2 text-right">Selling Price</th>
                  <th className="py-2">Supplier</th>
                  <th className="py-2">Expiry</th>
                  <th className="py-2">Batch</th>
                  <th className="py-2">Barcode / QR</th>
                  <th className="py-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.inventory.map((p) => {
                  const threshold = Number(p.low_stock_threshold || 5);
                  const low = Number(p.stock_qty || 0) <= threshold;
                  return (
                    <tr key={p.id} className="border-t border-black/5">
                      <td className="py-2.5 font-medium capitalize text-shopfront">
                        <div className="flex items-center gap-2">
                          {low && <AlertTriangle className="h-4 w-4 text-terracotta" />}
                          {p.name}
                        </div>
                      </td>
                      <td className={`py-2.5 text-right font-semibold ${low ? "text-terracotta" : "text-ink/70"}`}>
                        {+Number(p.stock_qty || 0).toFixed(1)} {p.unit !== "unit" ? p.unit : ""}
                      </td>
                      <td className="py-2.5 text-right text-ink/70">₹{Number(p.purchase_price || p.cost_price || 0).toFixed(2)}</td>
                      <td className="py-2.5 text-right text-ink/70">₹{Number(p.selling_price || p.sell_price || 0).toFixed(2)}</td>
                      <td className="py-2.5 text-ink/70">{p.supplier || "—"}</td>
                      <td className="py-2.5 text-ink/70">{p.expiry_date || "—"}</td>
                      <td className="py-2.5 text-ink/70">{p.batch_number || "—"}</td>
                      <td className="py-2.5 text-ink/70">
                        <div className="flex items-center gap-2">
                          {p.barcode ? <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs">{p.barcode}</span> : <span className="text-ink/40">—</span>}
                          {p.qr_code ? <QrCode className="h-4 w-4 text-shopfront" /> : <ScanLine className="h-4 w-4 text-ink/30" />}
                        </div>
                      </td>
                      <td className="py-2.5 text-right">
                        {low ? (
                          <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-xs font-semibold text-terracotta">
                            {t("dashboard.lowStockTag")}
                          </span>
                        ) : (
                          <span className="rounded-full bg-leaf/10 px-2 py-0.5 text-xs font-semibold text-leaf">
                            In Stock
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Empty>{t("dashboard.noStock")}</Empty>
        )}
      </Card>

      {/* Add Product Modal */}
      {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}
