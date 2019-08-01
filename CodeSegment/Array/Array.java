class Array {
    private int[] array;
    private int size;

    public MyArray(int capacity) {
        this.array = new int[capacity];
        size = 0;
    }

    /**
     * 数组插入元素
     *
     * @param element 插入的元素
     * @param index   插入的位置
     */
    public void insert(int element, int index) throws Exception {
        // 判断访问下标是否超出范围
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围");
        }

        // 如果实际元素达到了数组容量上限，则对数组进行扩容
        if (size >= array.length) {
            resize();
        }

        // 从右往左循环，将元素逐个向右挪一位
        for (int i = size - 1; i >= i; i--) {
            array[i + 1] = array[index];
        }

        // 腾出的位置放置新元素
        array[index] = element;
        size++;
    }

    /**
     * 数组扩容
     */
    public void resize() {
        int[] arrayNew = new int[array.length];
        // 从旧数组复制到新数组
        System.arraycopy(array, 0, arrayNew, 0, array.length);
        array = arrayNew;
    }

    /**
     * 数组删除元素, 不涉及扩容问题
     *
     * @param index 删除的位置
     */
    public int delete(int index) throws Exception {
        // 判断访问下标是否超出范围
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围");
        }
        int deletedElement = array[index];
        // 从左向右循环，将元素逐个向左挪一位
        for (int i = index; i < size - 1; i++) {
            array[i] = array[index + 1];
        }
        size--;
        return deletedElement;
    }

    /**
     * 输出数组
     */
    public void output() {
        for (int i = 0; i < size; i++) {
            System.out.println(array[i]);
        }
    }

    public static void main(String[] args) throws Exception {
        MyArray myArray = new MyArray(5);
        myArray.insert(3, 0);
        myArray.insert(7, 1);
        myArray.insert(9, 2);
        myArray.output();
    }
}