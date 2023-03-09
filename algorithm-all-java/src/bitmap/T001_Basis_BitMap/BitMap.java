package bitmap.T001_Basis_BitMap;

public class BitMap {

    long[] bits;

    public static void main(String[] args) {
        BitMap bitMap = new BitMap(200);
        bitMap.add(10);
        bitMap.add(30);
        bitMap.delete(20);
        System.out.println(bitMap.contain(10));
        System.out.println(bitMap.contain(11));
    }

    public BitMap() {
    }

    public BitMap(int max) {
        bits = new long[(max + 64) >> 6];
    }

    public void add(int number) {
        bits[number >> 6] |= (1L << (number & 63));
    }

    public void delete(int number) {
        bits[number >> 6] &= ~(1L << (number & 63));
    }

    public boolean contain(int number) {
        return (bits[number >> 6] & (1L << (number & 63))) != 0;
    }
}
