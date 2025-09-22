draggedItem = null;
function dragstartHandler(ev) {
    draggedItem = ev.target;
    // Optional: Đặt dữ liệu vào dataTransfer.setData.
    // Mặc dù chúng ta không dùng ID, việc này vẫn cần thiết cho một số trình duyệt
    // để kích hoạt hành vi kéo thả và hiển thị con trỏ kéo.
    ev.dataTransfer.setData("text/plain", ev.target.textContent);
    ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

// ...existing code...

function dropHandler(ev) {
    ev.preventDefault();
    if (draggedItem) {
        let dropTarget = ev.target; // Phần tử mà con trỏ chuột đang ở trên khi thả
        let dropList = null; // Danh sách kanban-list mà mục sẽ được thả vào

        // 1. Tìm phần tử cha gần nhất có class 'kanban-list' (vùng thả thực sự)
        let tempParent = dropTarget;
        while (tempParent && !tempParent.classList.contains("kanban-list")) {
            tempParent = tempParent.parentNode;
        }
        dropList = tempParent;

        if (dropList && dropList.classList.contains("kanban-list")) {
            let insertBeforeElement = null;
            let hoveredItem = null; // Phần tử kanban-item mà chuột đang rê qua

            // Tìm phần tử kanban-item thực sự mà chuột đang rê qua (hoặc cha của nó)
            let currentElement = dropTarget;
            while (currentElement && currentElement !== dropList && !currentElement.classList.contains("kanban-item")) {
                currentElement = currentElement.parentNode;
            }
            if (currentElement && currentElement.classList.contains("kanban-item")) {
                hoveredItem = currentElement;
            }

            if (hoveredItem) {
                // Nếu có một kanban-item đang được rê chuột qua
                const rect = hoveredItem.getBoundingClientRect(); // Lấy kích thước và vị trí của item
                const mouseY = ev.clientY; // Vị trí Y của con trỏ chuột
                const midpoint = rect.top + rect.height / 2; // Điểm giữa theo chiều dọc của item

                if (mouseY < midpoint) {
                    // Nếu con trỏ chuột ở nửa trên của item, chèn trước item đó
                    insertBeforeElement = hoveredItem;
                } else {
                    // Nếu con trỏ chuột ở nửa dưới của item, chèn sau item đó
                    // Điều này có nghĩa là chèn trước phần tử anh em liền kề tiếp theo của item đó
                    insertBeforeElement = hoveredItem.nextElementSibling;
                }
            }
            // Nếu không có hoveredItem (tức là thả vào khoảng trống của dropList),
            // insertBeforeElement sẽ vẫn là null, và mục sẽ được thêm vào cuối.

            // 3. Thực hiện chèn hoặc thêm vào cuối
            if (insertBeforeElement) {
                // Chèn draggedItem vào trước insertBeforeElement
                dropList.insertBefore(draggedItem, insertBeforeElement);
            } else {
                // Nếu không tìm thấy phần tử cụ thể để chèn trước (ví dụ: thả vào danh sách trống
                // hoặc thả vào khoảng trống cuối danh sách), thì thêm vào cuối.
                dropList.appendChild(draggedItem);
            }

            draggedItem = null; // Reset biến draggedItem sau khi thả
        }
    }
}
