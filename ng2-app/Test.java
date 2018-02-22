class Test{
    public static void main(String... args){
        String e = "";
        int len = 5;
        for(int i = 0; i < len; i++){
            e+="*";
            System.out.printf("%1$"+len+"s \n",e);
        }
    }
}